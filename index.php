<?php

	/*
		Plugin Name: ICS
		Plugin URI: https://wordpress.org/plugins/ics/
		Description: INLINE CATEGORY SEARCH
		Version: 1.6.5
		Author: Nima Saberi
		Author URI: http://uxdev.ir
		
	*/

	if ( ! defined( 'ABSPATH' ) ) {  exit; }

	add_action( 'admin_enqueue_scripts', 'ics_enqueue_script' );
	function ics_enqueue_script() {
		wp_enqueue_style( 'ics-css', plugins_url('assets/ics.css?v1.5', __FILE__), false );
		wp_enqueue_script( 'ics-js', plugins_url('assets/ics.js?v1.6.5', __FILE__), false );
	}

	add_action( 'admin_print_scripts', function () {
		?>
		<script>
			var icsLang = '<?php echo get_bloginfo("language"); ?>';
		</script>
		<?php
	} );
	
	/*function uxdev_admin_page() {
		echo '<div class="wrap">'.
			'<h2>آزمایشگاه ایده نو</h2>'.
			'<hr>'.
			'<ul>'.
				'<li><h1><a href="http://uxdev.ir">uxDev.ir</a></h1></li>'.
			'</ul>'.
		'</div>';
	}
	
	if ( ! function_exists('register_uxdev_menu') ) {
		add_action('admin_menu', 'register_uxdev_menu');
		function register_uxdev_menu() {
			add_menu_page(
				'ایده نو',
				'ایده نو',
				'manage_options',
				'admin.php?page=uxdev',
				'uxdev_admin_page'
			);
			add_submenu_page(
				'admin.php?page=uxdev',
				'پلاگین‌ها',
				'پلاگین‌ها',
				'manage_options',
				'plugin-install.php?s=nipoto&tab=search&type=author',
				''
			);
			add_submenu_page(
				'admin.php?page=uxdev',
				'درباره',
				'uxdev.ir',
				'manage_options',
				'http://uxdev.ir',
				''
			);
		}
	}*/
	
?>