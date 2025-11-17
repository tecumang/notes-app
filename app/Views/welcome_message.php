<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
  <title>Framework7 Demo</title>
  <link rel="stylesheet" href="https://unpkg.com/framework7/framework7-bundle.min.css">
</head>
<body>
  <div id="app">
    <div class="view view-main">
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner">
            <div class="title">My Framework7 + CodeIgniter App</div>
          </div>
        </div>
        <div class="page-content">
          <p>Hello Framework7 inside CodeIgniter!</p>
        </div>
      </div>
    </div>
  </div>

  <script src="https://unpkg.com/framework7/framework7-bundle.min.js"></script>
  <script>
    var app = new Framework7({
      el: '#app',
      name: 'My App',
      theme: 'auto',
    });
  </script>
</body>
</html>
