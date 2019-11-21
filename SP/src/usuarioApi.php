<?php
require_once "../src/app/models/usuario.php";
require_once "../src/IApiUsable.php";
require_once "../src/AutentificadorJWT.php";
use App\Models;
use App\Models\usuario;

class usuarioApi implements IApiUsable
{
    public function TraerUno($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();
        $descripcion=$args['descripcion'];
        $todos = usuario::where('descripcion', '=', $descripcion)->get();
        $objDelaRespuesta->respuesta=$todos;
        return $response->withJson($objDelaRespuesta, 200);
    }
    public function TraerTodos($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();
        $todos = usuario::all();
        $objDelaRespuesta->respuesta=$todos;
        return $response->withJson($objDelaRespuesta, 200);
    }
    public function CargarUno($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();

        $ArrayDeParametros = $request->getParsedBody();

        $tipo= $ArrayDeParametros['tipo'];
        $email= $ArrayDeParametros['email'];
        $password= $ArrayDeParametros['password'];

        $miUser = new usuario();
        $miUser->email=$email;
        $miUser->tipo=$tipo;
        $miUser->password=$password;

        $miUser->save();

        $objDelaRespuesta->respuesta="Se cargo correctamente";
        return $response->withJson($objDelaRespuesta, 200);
    }
    public function BorrarUno($request, $response, $args)
    {
		$objDelaRespuesta= new stdclass();

        $ArrayDeParametros = $request->getParsedBody();
		
		$id= $ArrayDeParametros['id'];
		
		$usuario = new usuario();
		$usuario = $usuario->where('id', $id)->first();
        $usuario->delete();
        
        return $response;
    }
    public function ModificarUno($request, $response, $args)
    {

    }
    public function Login($request, $response, $args)
    {
        $objDelaRespuesta= new stdclass();

        $ArrayDeParametros = $request->getParsedBody();

        $email= $ArrayDeParametros['email'];
        $password= $ArrayDeParametros['password'];

        $usuarioLogin = new usuario();
        $usuarioLogin = $usuarioLogin->where('email', $email)->first();

        if($usuarioLogin)
        {
            if($usuarioLogin->password == $password)
            {
                $id = $usuarioLogin->id;
                $datos = array(
                    'id'=>$id,
                    'email'=>$email,
                    'tipo'=>$tipo,
                );
                return AutentificadorJWT::CrearToken($datos);
            }
            else
            {
                return $response->withJson("Password incorrectas", 200);
            }
        }
        else
        {
            return $response->withJson("Email invalido", 200);
        }
    }
}

?>
