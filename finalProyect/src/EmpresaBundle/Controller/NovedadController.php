<?php

namespace EmpresaBundle\Controller;

use EmpresaBundle\Entity\Novedad;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Novedad controller.
 *
 * @Route("novedad")
 */
class NovedadController extends Controller
{
    /**
     * Lists all novedad entities.
     *
     * @Route("/", name="novedad_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $novedads = $em->getRepository('EmpresaBundle:Novedad')->findAll();

        return $this->render('novedad/index.html.twig', array(
            'novedads' => $novedads,
        ));
    }

    /**
     * Creates a new novedad entity.
     *
     * @Route("/new", name="novedad_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $novedad = new Novedad();
        $form = $this->createForm('EmpresaBundle\Form\NovedadType', $novedad);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($novedad);
            $em->flush();

            return $this->redirectToRoute('novedad_show', array('id' => $novedad->getId()));
        }

        return $this->render('novedad/new.html.twig', array(
            'novedad' => $novedad,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a novedad entity.
     *
     * @Route("/{id}", name="novedad_show")
     * @Method("GET")
     */
    public function showAction(Novedad $novedad)
    {
        $deleteForm = $this->createDeleteForm($novedad);

        return $this->render('novedad/show.html.twig', array(
            'novedad' => $novedad,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing novedad entity.
     *
     * @Route("/{id}/edit", name="novedad_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Novedad $novedad)
    {
        $deleteForm = $this->createDeleteForm($novedad);
        $editForm = $this->createForm('EmpresaBundle\Form\NovedadType', $novedad);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('novedad_edit', array('id' => $novedad->getId()));
        }

        return $this->render('novedad/edit.html.twig', array(
            'novedad' => $novedad,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a novedad entity.
     *
     * @Route("/{id}", name="novedad_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Novedad $novedad)
    {
        $form = $this->createDeleteForm($novedad);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($novedad);
            $em->flush();
        }

        return $this->redirectToRoute('novedad_index');
    }

    /**
     * Creates a form to delete a novedad entity.
     *
     * @param Novedad $novedad The novedad entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Novedad $novedad)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('novedad_delete', array('id' => $novedad->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
