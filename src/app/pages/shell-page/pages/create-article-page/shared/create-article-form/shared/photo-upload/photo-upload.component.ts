import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'pr-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent {
  @Input()
  photoControl: FormControl;

  imageUrl: string | ArrayBuffer | null = null;

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
      this.convertImageToBase64(file);
    };
    reader.readAsDataURL(file);
  }

  replaceImage(): void {
    this.imageUrl = null;
    this.photoControl.setValue(null);
  }

  private convertImageToBase64(file: File): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString() || '';
      this.photoControl.setValue(base64String);
    };
    reader.readAsDataURL(file);
  }

  private highlightDropzone(highlight: boolean): void {
    const dropzone = document.querySelector('.dropzone');

    if (dropzone) {
      // @ts-ignore
      dropzone.style.border = highlight ? '2px dashed blue' : '2px dashed #ccc';
    }
  }
}
