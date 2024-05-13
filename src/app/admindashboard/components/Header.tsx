import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (

    <>
      {/* Google Font: Source Sans Pro */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
      {/* Font Awesome */}
      <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css" />
      {/* Ionicons */}
      <link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css" />
      <link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css" />
      <link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css" />

      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
      {/* Tempusdominus Bootstrap 4 */}
      <link rel="stylesheet" href="../plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
      {/* iCheck */}
      <link rel="stylesheet" href="../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
      {/* JQVMap */}
      <link rel="stylesheet" href="..//jqvmap/jqvmap.min.css" />
      {/* Theme style */}
      <link rel="stylesheet" href="../dist/css/adminlte.min.css" />
      {/* overlayScrollbars */}
      <link rel="stylesheet" href="../plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
      {/* Daterange picker */}
      <link rel="stylesheet" href="../plugins/daterangepicker/daterangepicker.css" />
      {/* summernote */}
      <link rel="stylesheet" href="../plugins/summernote/summernote-bs4.min.css" />

      
        < nav className="main-header navbar navbar-expand navbar-white navbar-light" >
          {/* Left navbar links */}
          < ul className="navbar-nav" >
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link href="/userdashboard" className="nav-link">Home</Link>
            </li>

          </ul >
          {/* Right navbar links */}
          < ul className="navbar-nav ml-auto" >
            <li className="nav-item">
              <a className="nav-link" data-widget="fullscreen" role="button">
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                <i className="fas fa-th-large" />
              </a>
            </li>
          </ul >
        </nav >


        <script src="plugins/jquery/jquery.min.js"></script>

        <script src="plugins/jquery-ui/jquery-ui.min.js"></script>

        {/* <script>
    $.widget.bridge('uibutton', $.ui.button)
</script> */}

        <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* <!-- ChartJS --> */}
        <script src="../plugins/chart.js/Chart.min.js"></script>
        {/* <!-- Sparkline --> */}
        <script src="../plugins/sparklines/sparkline.js"></script>

        <script src="../plugins/jqvmap/jquery.vmap.min.js"></script>
        <script src="../plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
        {/* <!-- jQuery Knob Chart --> */}
        <script src="../plugins/jquery-knob/jquery.knob.min.js"></script>
        {/* <!-- daterangepicker --> */}
        <script src="../plugins/moment/moment.min.js"></script>
        <script src="../plugins/daterangepicker/daterangepicker.js"></script>
        {/* <!-- Tempusdominus Bootstrap 4 --> */}
        <script src="../plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
        {/* <!-- Summernote --> */}
        <script src="../plugins/summernote/summernote-bs4.min.js"></script>
        {/* <!-- overlayScrollbars --> */}
        <script src="../plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
        {/* <!-- AdminLTE App --> */}
        <script src="../dist/js/adminlte.js"></script>
      
    </>
  )
}

export default Header