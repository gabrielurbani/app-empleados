import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
 constructor(private servicioVentanaEmergente: ServicioEmpleadosService){}
  empleados:Empleado[]=[
        new Empleado("Juan","Perez","Gerente", 3000),
        new Empleado("Romina","Salguero","Ceo", 4000),
        new Empleado("Nicolas","Gutierrez","Jefe Tecnico", 3000),
        new Empleado("Juan","Perez","Administrativo", 3000),
      ];
      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va agregar: " + "\n" + empleado.nombre + "\n" + empleado.salario)
        this.empleados.push(empleado);
        console.log(empleado);
        
      }
      encontrarEmpleados(i:number){
        let empleado:Empleado=this.empleados[i];
        return empleado;
      };
      actualizarEmpleado(i:number, empleado:Empleado){
        let empleadoModificado=this.empleados[i];
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

      }
      eliminarEmpleado(i:number){
        this.empleados.splice(i,1);
      }
}