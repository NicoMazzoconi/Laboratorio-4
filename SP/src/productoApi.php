<?php
require_once "../src/app/models/producto.php";
require_once "../src/IApiUsable.php";
require_once "../src/AutentificadorJWT.php";
use App\Models;
use App\Models\producto;

class productoApi implements IApiUsable
{
    public function TraerUno($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();
        $descripcion=$args['descripcion'];
        $todos = producto::where('descripcion', '=', $descripcion)->get();
        $objDelaRespuesta->respuesta=$todos;
        return $response->withJson($objDelaRespuesta, 200);
    }
    public function TraerTodos($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();
        $todos = producto::all();
        $objDelaRespuesta->respuesta=$todos;
        return $response->withJson($objDelaRespuesta, 200);
    }
    public function CargarUno($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();

        $ArrayDeParametros = $request->getParsedBody();

        $tipo= $ArrayDeParametros['tipo'];
        $descripcion= $ArrayDeParametros['descripcion'];
        $fechaDeVencimiento= $ArrayDeParametros['fechaDeVencimiento'];
        $precio= $ArrayDeParametros['precio'];   
        $rutaDeFoto= 'https://www.ombushop.com/blog/wp-content/uploads/2015/06/new-product-seal_23-2147503128.jpg';

        $miUser = new producto();
        $miUser->descripcion=$descripcion;
        $miUser->tipo=$tipo;
        $miUser->fechaDeVencimiento=$fechaDeVencimiento;
        $miUser->precio=$precio;
        $miUser->rutaDeFoto=$rutaDeFoto;

        $miUser->save();

        $objDelaRespuesta->respuesta="Se cargo correctamente";
        return $response->withJson($objDelaRespuesta, 200);
    }
    public function BorrarUno($request, $response, $args)
    {
		$objDelaRespuesta= new stdclass();

        $ArrayDeParametros = $request->getParsedBody();
		
		$id= $ArrayDeParametros['id'];
		
		$producto = new Producto();
		$producto = $producto->where('id', $id)->first();
        $producto->delete();
        
        return $response;
    }
    public function ModificarUno($request, $response, $args)
    {

    }
    public function Login($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();

        $ArrayDeParametros = $request->getParsedBody();

        $nombre= $ArrayDeParametros['nombre'];
        $password= $ArrayDeParametros['password'];
        $sexo= $ArrayDeParametros['sexo'];

        $productoLogin = new producto();
        $productoLogin = $productoLogin->where('nombre', $nombre)->first();

        if($productoLogin)
        {
            if($productoLogin->password == $password && $productoLogin->sexo == $sexo)
            {
                $id = $productoLogin->id;
                $datos = array(
                    'id'=>$id,
                    'nombre'=>$nombre,
                    'sexo'=>$sexo,
                    'perfil'=>$productoLogin->perfil
                );
                return AutentificadorJWT::CrearToken($datos);
            }
            else
            {
                return $response->withJson("Sexo o password incorrectas", 200);
            }
        }
        else
        {
            return $response->withJson("Nombre invalido", 200);
        }
    }
}

?>
