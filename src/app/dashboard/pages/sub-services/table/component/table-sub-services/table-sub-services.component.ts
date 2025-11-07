import { Component, OnInit } from '@angular/core';
import { SubServiceDto } from '../../../../../../models/SubService/SubService.modal';
import { SubServiceResponse } from '../../../../../../models/SubService/SubService.Response';
import { ToastrService } from 'ngx-toastr';
import { CurrentUserService } from '../../../../../../services/currentUser.service';
import { SubServiceService } from '../../../../../../services/subService.service';

@Component({
  selector: 'app-table-sub-services',
  standalone:false,
  templateUrl: './table-sub-services.component.html',
  styleUrl: './table-sub-services.component.css'
})
export class TableSubServicesComponent implements OnInit {
    response: SubServiceResponse | undefined;
    selectedSort: string = '';
    searchText: string = '';
    currentPage: number = 1;
    pageSize: number = 10;
    totalPages: number = 1;
    isDeleteModalOpen = false;
    serviceToDelete!: SubServiceDto;

  constructor(
    private _subServiceService: SubServiceService,
    private toastr: ToastrService ) {}

  ngOnInit(): void {
    this.getSubServices();
  }

getSubServices(): void {
  this._subServiceService.getSubServices(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
    .subscribe({
      next: (data: SubServiceResponse) => {
        this.response = data;
        console.log(data);
        const rowCount = data.subService?.pagination?.rowCount ?? 0;
        this.totalPages = Math.ceil(rowCount / this.pageSize);
      },
      error: (err) => {
        console.error('Error loading services:', err);
      },
    });
}


  changeNotActivation(serviceId: number, service: SubServiceDto) {
    this._subServiceService.unArchiveSubService(serviceId).subscribe({
      next: () => {
        this.toastr.success('The service has been removed from archived items', 'Service Archived!');
        service.archived = false;
        this.getSubServices();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.err, 'Error!');
      }
    });
  }

  changeActivation(serviceId: number, service: SubServiceDto) {
    this._subServiceService.archiveSubService(serviceId).subscribe({
      next: () => {
        this.toastr.success('The service has been added to archived items', 'Service Activated!');
        service.archived = true;
        this.getSubServices();
      },
      error: (err) => this.toastr.error(err.err, 'Error!')
    });
  }

  openDeleteModal(service: SubServiceDto) {
    this.serviceToDelete = service;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  confirmDelete() {
    if (!this.serviceToDelete) return;
    this._subServiceService.deleteSubService(this.serviceToDelete.id).subscribe({
      next: () => {
        this.toastr.success('The service has been deleted successfully', 'Success');
        this.getSubServices();
        this.closeDeleteModal();
      },
      error: (err) => {
        this.toastr.error('An error occurred while deleting the service', 'Error');
        console.error(err);
      }
    });
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.getSubServices();
  }


}
