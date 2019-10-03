<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
require_once "../src/productoApi.php";
require_once "../src/compraApi.php";
require_once "../src/MWparaAutentificar.php";
require_once "../src/MWparaCORS.php";


return function (App $app) {
    $container = $app->getContainer();

    $app->group('/usuario', function(){
		$this->post('/borrar', \productoApi::class . ':BorrarUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
        $this->post('/', \productoApi::class . ':CargarUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
        $this->get('/{descripcion}', \productoApi::class . ':TraerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
        $this->get('/traer/', \productoApi::class . ':TraerTodos')->add(\MWparaCORS::class . ':HabilitarCORSTodos');//->add(\MWparaAutentificar::class . ':VerificarUsuarioTraer');
    });

    $app->post('/login', \productoApi::class . ':Login');

    $app->group('/Compra', function(){
        $this->post('', \compraApi::class . ':CargarUno');//->add(\MWparaAutentificar::class . ':VerificarLogeadoCompra');
        $this->get('', \compraApi::class . ':TraerTodos');//->add(\MWparaAutentificar::class . ':VerificarTraerCompra');
    });
};
