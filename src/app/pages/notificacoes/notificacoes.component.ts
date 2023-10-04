import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload, UploadEvent } from 'primeng/fileupload';
import { Image } from 'primeng/image';

interface Users{
  name: string;
}

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.scss'],
  providers: [MessageService]
})
export class NotificacoesComponent {
  @ViewChild('fileUpload') fileUpload: FileUpload;
  @ViewChild('image') image: Image;

  dropUser: Users[];
  selectedUsers: Users;

  originalEvent: Event;
  files: File[];

  uploadedImageUrl: string;

  selectedImageUrl: string ;

  onFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image')) {
        this.selectedImageUrl = URL.createObjectURL(file);
      } else {
        alert('Por favor, selecione um arquivo de imagem.');
      }
    }
  }

  clearImage() {
    this.selectedImageUrl = '';
  }

  constructor(private messageService: MessageService){}

 

  ngOnInit(){
    this.dropUser = [
      {name: 'Todos'}
    ]
  }

}
