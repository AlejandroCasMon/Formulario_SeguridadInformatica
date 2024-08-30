import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Cuestionario.css';

const Cuestionario = () => {
    const [nombre, setNombre] = useState("");
    const [paterno, setPaterno] = useState("");
    const [materno, setMaterno] = useState("");
    const [fecha, setFecha] = useState(null);
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState(0);
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const registrarUsuario = () => {
        if (nombre!=null && paterno!=null && materno!=null && fecha!=null && direccion!=null && telefono!=null && correo!=null && password!=null && passwordConfirm!=null) {
            if (validarFecha){
                alert("Usuairo registrado con exito!!");
            }
        }else {
            alert("Faltan campos por rellenar");
        }
    };

    const validarFecha = (fechaSeleccionada) => {
        var fechaActual = new Date();
        var fechaEntrada = new Date(fecha);

        if (fechaEntrada > fechaActual) {
            return false;
        }
        return true;
    }

    return(
        <div className="cuerpo">
            <div className="formulario">
                <Form className="cuerpoForm">
                    <h2>Formulario de registro</h2>
                    <Form.Group className="mb-3" controlId="nombreId">
                        <Form.Label className="etiquetaName">Nombre/s</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Nombre"
                        onChange={(event) => {
                            setNombre(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="paterno">
                        <Form.Label className="etiquetaName">Apellido paterno</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="Apellido paterno"
                        onChange={(event) => {
                            setPaterno(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="materno">
                        <Form.Label className="etiquetaName">Apellido materno</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="Apellido materno"
                        onChange={(event) => {
                            setMaterno(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fechaNac">
                        <Form.Label className="etiquetaName">Fecha de nacimiento</Form.Label>
                        <Form.Control
                        type="date"
                        onChange={(event) => {
                            setFecha(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="direccion">
                        <Form.Label className="etiquetaName">Dirección</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Dirección"
                        onChange={(event) => {
                            setDireccion(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label className="etiquetaName">Telefono</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Telefono"
                        onChange={(event) => {
                            setTelefono(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="correo">
                        <Form.Label className="etiquetaName">Correo electronico</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="ejemplo@dominio.xx"
                        onChange={(event) => {
                            setCorreo(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label className="etiquetaName">Contraseña</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label className="etiquetaName">Confirmar contraseña</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Confirmar contraseña"
                        onChange={(event) => {
                            setPasswordConfirm(event.target.value);
                        }}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={registrarUsuario}>
                        Registrar
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Cuestionario;