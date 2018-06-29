<?php

namespace EmpresaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Reserva
 *
 * @ORM\Table(name="reserva")
 * @ORM\Entity(repositoryClass="EmpresaBundle\Repository\ReservaRepository")
 */
class Reserva
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="usuario", type="string", length=255)
     */
    private $usuario;

    /**
     * @var string
     *
     * @ORM\Column(name="vehiculo", type="string", length=255)
     */
    private $vehiculo;

    /**
     * @var int
     *
     * @ORM\Column(name="dias", type="integer")
     */
    private $dias;

    /**
     * @var int
     *
     * @ORM\Column(name="costoRentas", type="integer")
     */
    private $costoRentas;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fechaRenta", type="date")
     */
    private $fechaRenta;

    /**
     * @var string
     *
     * @ORM\Column(name="estado", type="string", length=255)
     */
    private $estado;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set usuario
     *
     * @param string $usuario
     *
     * @return Reserva
     */
    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;

        return $this;
    }

    /**
     * Get usuario
     *
     * @return string
     */
    public function getUsuario()
    {
        return $this->usuario;
    }

    /**
     * Set vehiculo
     *
     * @param string $vehiculo
     *
     * @return Reserva
     */
    public function setVehiculo($vehiculo)
    {
        $this->vehiculo = $vehiculo;

        return $this;
    }

    /**
     * Get vehiculo
     *
     * @return string
     */
    public function getVehiculo()
    {
        return $this->vehiculo;
    }

    /**
     * Set dias
     *
     * @param integer $dias
     *
     * @return Reserva
     */
    public function setDias($dias)
    {
        $this->dias = $dias;

        return $this;
    }

    /**
     * Get dias
     *
     * @return int
     */
    public function getDias()
    {
        return $this->dias;
    }

    /**
     * Set costoRentas
     *
     * @param integer $costoRentas
     *
     * @return Reserva
     */
    public function setCostoRentas($costoRentas)
    {
        $this->costoRentas = $costoRentas;

        return $this;
    }

    /**
     * Get costoRentas
     *
     * @return int
     */
    public function getCostoRentas()
    {
        return $this->costoRentas;
    }

    /**
     * Set fechaRenta
     *
     * @param \DateTime $fechaRenta
     *
     * @return Reserva
     */
    public function setFechaRenta($fechaRenta)
    {
        $this->fechaRenta = $fechaRenta;

        return $this;
    }

    /**
     * Get fechaRenta
     *
     * @return \DateTime
     */
    public function getFechaRenta()
    {
        return $this->fechaRenta;
    }

    /**
     * Set estado
     *
     * @param string $estado
     *
     * @return Reserva
     */
    public function setEstado($estado)
    {
        $this->estado = $estado;

        return $this;
    }

    /**
     * Get estado
     *
     * @return string
     */
    public function getEstado()
    {
        return $this->estado;
    }
}

