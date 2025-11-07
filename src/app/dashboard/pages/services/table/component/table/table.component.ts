import { Component, OnInit} from '@angular/core';
import { NewsService } from '../../../../../../services/news.service';
import { ToastrService } from 'ngx-toastr';
import { CurrentUserService } from '../../../../../../services/currentUser.service';
import { ServiceDto } from '../../../../../../models/Service/Service.modal';
import { ServiceService } from '../../../../../../services/service.service';
import { ServiceResponse } from '../../../../../../models/Service/Service.Response';

@Component({
  selector: 'app-table',
    standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
    response: ServiceResponse | undefined;
    selectedSort: string = '';
    searchText: string = '';
    currentPage: number = 1;
    pageSize: number = 10;
    totalPages: number = 1;
    isDeleteModalOpen = false;
    serviceToDelete!: ServiceDto;

  constructor(
    private serviceService: ServiceService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getServices();
  }

getServices(): void {
  this.serviceService
    .getServices(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
    .subscribe({
      next: (data: ServiceResponse) => {
        if (data && data.service) {
          this.response = data;
          const rowCount = data.service.pagination?.rowCount ?? 0;
          this.totalPages = Math.ceil(rowCount / this.pageSize);
        } else {
          console.warn('No services data returned from API');
          this.response = {} as ServiceResponse;
          this.totalPages = 0;
        }
      },
      error: (error) => {
        console.error('Error loading services:', error);
        this.response = {} as ServiceResponse;
        this.totalPages = 0;
      },
    });
}



  changeNotActivation(serviceId: number, service: ServiceDto) {
    this.serviceService.unArchiveService(serviceId).subscribe({
      next: () => {
        this.toastr.success('The service has been removed from archived items', 'Service Archived!');
        service.archived = false;
        this.getServices();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.err, 'Error!');
      }
    });
  }

  changeActivation(serviceId: number, service: ServiceDto) {
    this.serviceService.archiveService(serviceId).subscribe({
      next: () => {
        this.toastr.success('The service has been added to archived items', 'Service Activated!');
        service.archived = true;
        this.getServices();
      },
      error: (err) => this.toastr.error(err.err, 'Error!')
    });
  }

  openDeleteModal(service: ServiceDto) {
    this.serviceToDelete = service;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  confirmDelete() {
    if (!this.serviceToDelete) return;
    this.serviceService.deleteService(this.serviceToDelete.id).subscribe({
      next: () => {
        this.toastr.success('The service has been deleted successfully', 'Success');
        this.getServices();
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
    this.getServices();
  }


}
