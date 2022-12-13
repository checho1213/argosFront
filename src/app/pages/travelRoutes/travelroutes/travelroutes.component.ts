import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule } from '@angular/forms';
import { Title } from 'src/app/shared/interfaces/title';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-travelroutes',
  templateUrl: './travelroutes.component.html',
  styleUrls: ['./travelroutes.component.css']
})
export class TravelroutesComponent implements OnInit {
  title: Title;

  public routesForm: FormGroup;
  cols: any[] = [];
  routesData: any;
  
  constructor(private fb: FormBuilder,) {
    this.title = {
      primaryMessage: 'Administración de Rutas',
      secondaryMessage: 'Dashboard donde se visualizan y administran las rutas',
      isVisibleButton: true,
      breadcrumbs: [

      ],
      textButton: 'Crear Ruta'
    };
  }

  get getName() { return this.routesForm.get('name'); }
  get getCode() { return this.routesForm.get('code'); }
  get getPilot() { return this.routesForm.get('pilot'); }

  private initForm(): void {
    this.routesForm = this.fb.group({
      name: [''],
      id: [null],
      code: [''],
      pilot: [null],
    });
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'departureDate', header: 'Fecha de Salida' },
      { field: 'transportType', header: 'Tipo de Vehiculo' },
      { field: 'disponibility', header: 'Cupos Disponibles' },      
      { field: 'arrival', header: 'Lugar/Destino' },
    ];
    this.initForm();
    debugger
    this.routesData = [];
    this.routesData.push({
      "departureDate": "01/01/2022",
      "transportType": "Furgon",
      "disponibility": "100",
      "arrival": "Bogota/Neiva",
    });
    this.routesData.push({
      "departureDate": "01/01/2022",
      "transportType": "Furgon",
      "disponibility": "100",
      "arrival": "Bogota/Neiva",
    });
    this.routesData.push({
      "departureDate": "01/01/2022",
      "transportType": "sergio",
      "disponibility": "100",
      "arrival": "Bogota/Neiva",
    });
    this.routesData.push({
      "departureDate": "01/01/2022",
      "transportType": "avion",
      "disponibility": "100",
      "arrival": "Bogota/Neiva",
    });
    this.routesData.push({
      "departureDate": "01/01/2022",
      "transportType": "barco",
      "disponibility": "100",
      "arrival": "Bogota/Neiva",
    });
    this.routesData.push({
      "departureDate": "01/01/2022",
      "transportType": "nave",
      "disponibility": "100",
      "arrival": "Bogota/Neiva",
    });
  }

  clearForm() {
    this.routesForm.reset();
    // @ts-ignore: Object is possibly 'null'.
    this.getName.setValue('');
    // @ts-ignore: Object is possibly 'null'.
    this.getCode.setValue('');

  }

  search(): void {
    
  }

  create(event: any): void {

  }

  applyFilterGlobal($event:any, stringVal: any) {
    debugger
    this.routesData.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
