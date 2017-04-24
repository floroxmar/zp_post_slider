<?php
/*
Plugin Name: ZP Post Slider
Plugin URI: http://wordpress.org/plugins/zp-post-slider/
Description: ZP Post Slider is a simple plugin that will display your post in a slider or carousel form. You can display all posts or by category
Author: Joe Mar Aparecio
Author URI: http://joemaraparecio.com

Version: 1.0.0

Text Domain: zp-post-slider
Domain Path: /languages

License: GNU General Public License v2.0 (or later)
License URI: http://www.opensource.org/licenses/gpl-license.php
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
* Define Constants
*/
define('ZPPS_FILE', dirname(__FILE__));
define('ZZPS_URLPATH', plugins_url() . '/' . plugin_basename(dirname(__FILE__)));

/**
* Include Required Files
*/
require_once( ZPPS_FILE. '/include/zpps-carousel-widget.php' );
require_once( ZPPS_FILE. '/include/zpps-post-slider-widget.php' );

/**
 * Activation hook callback.
 *
 * This functions runs when the plugin is activated. It checks to make sure the user is running
 * a minimum Genesis version, so there are no conflicts or fatal errors.
 */
register_activation_hook( __FILE__, 'zpps_activation_check' );
function zpps_activation_check() {

	if ( ! defined( 'PARENT_THEME_VERSION' ) || ! version_compare( PARENT_THEME_VERSION, '2.3.0', '>=' ) )
		zpps_deactivate( '2.3.0' );

}

/**
 * Deactivate ZP Post Slider
 *
 * This function deactivates ZP Post Slider.
 */
function zpps_deactivate( $genesis_version = '2.3.0' ) {

	deactivate_plugins( plugin_basename( __FILE__ ) );
	wp_die( sprintf( __( 'Sorry, you cannot run this plugin without <a href="%s">Genesis Framework %s</a>, or greater.', 'zp-post-slider' ), 'http://my.studiopress.com/themes/genesis/', $genesis_version ) );

}

/**
 * Load textdomain
 */
add_action( 'plugins_loaded', 'zpps_load_textdomain' );
function zpps_load_textdomain() {
	load_plugin_textdomain( 'zp-post-slider', false, plugin_basename( dirname( __FILE__ ) ) . '/languages' );
}

/**
 * Widget Registration.
 *
 * Register Post Slider/Carousel widget.
 *
 */
add_action( 'widgets_init', 'zpps_load_widget' );
function zpps_load_widget() {
	register_widget( 'ZPPS_Post_Carousel' );
	register_widget( 'ZPPS_Post_Slider' );
}

/**
 * Enqueue JS & CSS
 */
add_action( 'wp_enqueue_scripts', 'zpps_enqueue_scripts_css' );
function zpps_enqueue_scripts_css(){
	wp_register_style( 'jquery-swiper', ZZPS_URLPATH . '/css/swiper.min.css', array(), '3.3.0' );
	wp_register_style( 'zpps-style', ZZPS_URLPATH . '/css/style.css', array(), '1.0.0' );

	wp_register_script( 'jquery-swiper', ZZPS_URLPATH. '/js/swiper.jquery.min.js', array( 'jquery' ), '3.3.0', true );	
	wp_register_script( 'zpps-init', ZZPS_URLPATH. '/js/zzps-init.js', array( 'jquery' ), '1.0.0', true );
}