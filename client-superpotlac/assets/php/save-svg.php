<?php header('Access-Control-Allow-Origin: *'); ?>
<?php header('Content-type: application/json'); ?>
<?php

if (move_uploaded_file($_FILES['image']['name'], '/data/web/virtuals/90306/virtual/www/domains/slusarcik.cz/shoptet/luvcase/images' . $_FILES['image']['name']) {

  if($errorimg > 0) {
      $response_array['status'] = 'error';
      $response_array['error_msg'] = 'Chyba při ukládání.';
      echo json_encode($response_array);
      die();
  }

  $response_array['status'] = 'done';
  $response_array['error_msg'] = 'Úspěšně nahráno.';

} else {
  $response_array['status'] = 'error';
  $response_array['error_msg'] = 'Chyba při move_file.';
  echo json_encode($response_array);
  die();
}