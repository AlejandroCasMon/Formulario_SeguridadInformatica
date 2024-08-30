import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Cuestionario.css';

const Cuestionario = () => {

    return(
        <div className="cuerpo">
            <div className="formulario">
                <Form className="cuerpoForm">
                    <h2>Formulario de registro</h2>
                    <Form.Group className="mb-3" controlId="nombreId">
                        <Form.Label className="etiquetaName">Nombre/s</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />
                        <Form.Text className="text-muted">
                        Esto esta muteado
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="paterno">
                        <Form.Label className="etiquetaName">Apellido paterno</Form.Label>
                        <Form.Control type="email" placeholder="Apellido paterno" />
                        <Form.Text className="text-muted">
                        Esto esta muteado
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="materno">
                        <Form.Label className="etiquetaName">Apellido materno</Form.Label>
                        <Form.Control type="email" placeholder="Apellido materno" />
                        <Form.Text className="text-muted">
                        Esto esta muteado
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fechaNac">
                        <Form.Label className="etiquetaName">Fecha de nacimiento</Form.Label>
                        <Form.Control type="date" />
                        <Form.Text className="text-muted">
                        Esto esta muteado
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="direccion">
                        <Form.Label className="etiquetaName">Dirección</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Dirección" />
                        <Form.Text className="text-muted">
                        Esto esta muteado
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label className="etiquetaName">Telefono</Form.Label>
                        <Form.Control type="number" placeholder="Telefono" />
                        <Form.Text className="text-muted">
                        Esto esta muteado
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="correo">
                        <Form.Label className="etiquetaName">Correo electronico</Form.Label>
                        <Form.Control type="email" placeholder="ejemplo@dominio.xx" />
                        <Form.Text className="text-muted">
                        Esto esta muteado
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label className="etiquetaName">Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label className="etiquetaName">Confirmar contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Confirmar contraseña" />
                    </Form.Group>

                    <Form.Group className="m-4 check" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Aceptar terminos y condiciones" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Cuestionario;