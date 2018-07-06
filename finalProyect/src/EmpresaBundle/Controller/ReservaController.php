<?php

namespace EmpresaBundle\Controller;

use EmpresaBundle\Entity\Reserva;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

/**
 * Reserva controller.
 *
 * @Route("reserva")
 */
class ReservaController extends Controller
{
    /**
     * Lists all reserva entities.
     *
     * @Route("/", name="reserva_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $reservas = $em->getRepository('EmpresaBundle:Reserva')->findAll();
        $response = new Response();
        $encoders = array(new JsonEncoder());

        $normalizers = array((new ObjectNormalizer())->setIgnoredAttributes(
            [
                "__initializer__", 
                "__cloner__",
                "__isInitialized__"
            ]));

        $serializer = new Serializer($normalizers, $encoders);
        $response->setContent(json_encode(array(
        'reservas' => $serializer->serialize($reservas, 'json'),
        )));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * Creates a new reserva entity.
     *
     * @Route("/new", name="reserva_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        
        $reserva = new Reserva();

        $usuarioArray= $request->request->get('usuario');
         $idusuario = $usuarioArray['id'];
         $em = $this->getDoctrine()->getManager();
         $usuario = $em->getRepository("EmpresaBundle:Usuario")->find($idusuario);
         $reserva->setUsuario($usuario);

        $usuarioArray= $request->request->get('vehiculo');
         $idusuario = $usuarioArray['id'];
         $em = $this->getDoctrine()->getManager();
         $usuario = $em->getRepository("EmpresaBundle:Vehiculo")->find($idusuario);
         $reserva->setVehiculo($usuario);


        $reserva->setDias($request->request->get('dias'));
        $reserva->setCostoRentas($request->request->get('costoRentas'));
        $fecha = new \DateTime($request->request->get('fechaRenta'));
        $reserva->setFechaRenta($fecha);
       
        $reserva->setEstado($request->request->get('estado'));
        
        $em = $this->getDoctrine()->getManager();
        
        $em->persist($reserva);
        $em->flush();
        
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Finds and displays a reserva entity.
     *
     * @Route("/{id}", name="reserva_show")
     * @Method("GET")
     */
    public function showAction(Reserva $reserva)
    {
        $deleteForm = $this->createDeleteForm($reserva);

        return $this->render('reserva/show.html.twig', array(
            'reserva' => $reserva,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing reserva entity.
     *
     * @Route("/{id}/edit", name="reserva_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction($id, Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $em = $this->getDoctrine()->getManager();
        $reserva = $em->getRepository('EmpresaBundle:Reserva')->find($id);

        $usuarioArray= $request->request->get('usuario');
        $idusuario = $usuarioArray['id'];
        $em = $this->getDoctrine()->getManager();
        $usuario = $em->getRepository("EmpresaBundle:Usuario")->find($idusuario);
        $reserva->setUsuario($usuario);
       
        $vehiculoArray= $request->request->get('vehiculo');
        $idVehiculo = $vehiculoArray['id'];
        $em = $this->getDoctrine()->getManager();
        $vehiculo = $em->getRepository("EmpresaBundle:Vehiculo")->find($idVehiculo);
        $reserva->setVehiculo($vehiculo);

        $reserva->setDias($request->request->get('dias'));
        $reserva->setCostoRentas($request->request->get('costoRentas'));
        
        $fecha = new \DateTime($request->request->get('fechaRenta'));
        $reserva->setFechaRenta($fecha);
        
        $reserva->setEstado($request->request->get('estado'));
        
        $em = $this->getDoctrine()->getManager();
        
        $em->persist($reserva);
        $em->flush();
        
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Deletes a reserva entity.
     *
     * @Route("/{id}", name="reserva_delete")
     * @Method("DELETE")
     */
    public function deleteAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $reserva = $em->getRepository('EmpresaBundle:Reserva')->find($id);

        if (!$reserva){
            throw $this->createNotFoundException('id incorrecta');
        }

        $em->remove($reserva);
        $em->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Creates a form to delete a reserva entity.
     *
     * @param Reserva $reserva The reserva entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Reserva $reserva)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('reserva_delete', array('id' => $reserva->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
