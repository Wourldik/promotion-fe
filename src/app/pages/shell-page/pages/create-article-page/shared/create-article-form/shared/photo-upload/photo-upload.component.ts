import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent {
  imageUrl: string | ArrayBuffer | null = null;
  isImageUploaded = false;

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.highlightDropzone(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.highlightDropzone(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.highlightDropzone(false);

    const file = event.dataTransfer?.files[0];
    if (file) {
      this.readAndPreview(file);
    }
  }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (file) {
      this.readAndPreview(file);
    }
  }
  private readAndPreview(file: File): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageUrl = reader.result;
      this.isImageUploaded = true;
    };
    reader.readAsDataURL(file);
  }

  replaceImage(): void {
    this.imageUrl = null;
    this.isImageUploaded = false;
  }

  private highlightDropzone(highlight: boolean): void {
    const dropzone = document.querySelector('.dropzone');

    if (dropzone) {
      // @ts-ignore
      dropzone.style.border = highlight ? '2px dashed blue' : '2px dashed #ccc';
    }
  }
}
