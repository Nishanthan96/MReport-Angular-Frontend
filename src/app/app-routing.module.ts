import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientaboutdocComponent } from './Patient/patientaboutdoc/patientaboutdoc.component';
import { PatientaboutdocspecialistsComponent } from './Patient/patientaboutdocspecialists/patientaboutdocspecialists.component';
import { PatientchannelingComponent } from './Patient/patientchanneling/patientchanneling.component';
import { PatientdashboardComponent } from './Patient/patientdashboard/patientdashboard.component';
import { PatientvaccineComponent } from './Patient/patientvaccine/patientvaccine.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { DoctorprofileComponent } from './Admin/doctorprofile/doctorprofile.component';
import { RegisterdoctorComponent } from './Admin/registerdoctor/registerdoctor.component';
import { RegisterpatientComponent } from './Admin/registerpatient/registerpatient.component';
import { ReportsComponent } from './Admin/reports/reports.component';
import { ScheduleappointmentsComponent } from './Admin/scheduleappointments/scheduleappointments.component';
import { ScheduleappointmentsviewComponent } from './Admin/scheduleappointmentsview/scheduleappointmentsview.component';
import { ViewpatientsComponent } from './Admin/viewpatients/viewpatients.component';
import { SARegisterhospitalComponent } from './SuperAdmin/registerhospital/registerhospital.component';
import { SAReportComponent } from './SuperAdmin/report/report.component';
import {SADoctorprofileComponent} from './SuperAdmin/doctorprofile/doctorprofile.component'
import {SARegisterdoctorComponent} from './SuperAdmin/registerdoctor/registerdoctor.component';
import { SARegisterpatientComponent} from './SuperAdmin/registerpatient/registerpatient.component'
import { SAScheduleappointmentComponent } from './SuperAdmin/scheduleappointment/scheduleappointment.component';
import { SAScheduleappointmentviewComponent } from './SuperAdmin/scheduleappointmentview/scheduleappointmentview.component';
import { ViewhospitalsComponent } from './SuperAdmin/viewhospitals/viewhospitals.component';
import { ViewpatientComponent } from './SuperAdmin/viewpatient/viewpatient.component';
import { AboutComponent } from './about/about.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { RegisterHospitalComponent } from './register-hospital/register-hospital.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { Admissionpatient } from './Admin/admissionpatient/admissionpatient.component';
import { SaDashboardComponent } from './SuperAdmin/sa-dashboard/sa-dashboard.component';
import { DocpatientsComponent } from './Doctor/docpatients/docpatients.component';
import { DoctordashboardComponent } from './Doctor/doctordashboard/doctordashboard.component';
import { DocvaccinesComponent } from './Doctor/docvaccines/docvaccines.component';

const routes: Routes = [
  {path:'',component:FrontpageComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'doctorprofile', component:DoctorprofileComponent},
  {path:'regdoctor', component:RegisterdoctorComponent},
  {path:'regpatient',component:RegisterpatientComponent},
  {path:'scheduleapp', component:ScheduleappointmentsComponent},
  {path:'scheduleappview', component:ScheduleappointmentsviewComponent},
  {path:'viewpatient', component:ViewpatientsComponent},
  {path:'admission', component:Admissionpatient},
  {path:'sa-doctorProfile', component:SADoctorprofileComponent},
  {path:'sa-registerdoctor', component:SARegisterdoctorComponent},
  {path:'sa-registerhospital', component:SARegisterhospitalComponent},
  {path:'sa-registerpatient', component:SARegisterpatientComponent},
  {path:'sa-reports', component:SAReportComponent},
  {path:'sa-dashboard', component:SaDashboardComponent},
  {path:'sa-scheduleappointments', component:SAScheduleappointmentComponent},
  {path:'sa-viewscheduleappointments', component:SAScheduleappointmentviewComponent},
  {path:'sa-viewhospitals', component:ViewhospitalsComponent},
  {path:'sa-view-patients', component:ViewpatientComponent},
  {path:'reg-dotor',component:RegisterDoctorComponent},
  {path:'reg-hospital',component:RegisterHospitalComponent},
  {path:'reg-patient',component:RegisterUserComponent},
  {path:'about',component:AboutComponent},
  {path:'dp' ,component:DocpatientsComponent},
  {path:'dd' ,component:DoctordashboardComponent},
  {path:'dv' ,component:DocvaccinesComponent},
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

 export const RoutingComponents= [ 
                                    DocpatientsComponent,
                                    DoctordashboardComponent,
                                    DocvaccinesComponent
                                    

 ]
