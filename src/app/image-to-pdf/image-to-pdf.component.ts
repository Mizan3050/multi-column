import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-image-to-pdf',
  templateUrl: './image-to-pdf.component.html',
  styleUrls: ['./image-to-pdf.component.scss']
})
export class ImageToPdfComponent implements OnInit {

  loadedAll = new BehaviorSubject<boolean>(false);

  images = [
    {
      name: 'Image 1',
      url: 'https://s3-ap-south-1.amazonaws.com/dev-hyper-media/companies/05980306-fdd0-46cc-beaa-e722fbffe0a0/products/54cb2a56-5105-4204-bfff-6e76ca81c277/assetss/files/05457250e4f4458fb2461ce9d7be4895-product-assets.webp',
    },
    {
      name: 'Image 3',
      url: 'https://s3.ap-south-1.amazonaws.com/assets.hyperinvento.com/hyperinventory_admin/assets/images/Template-images/dussehra-hero-img.png',
    },
    {
      name: 'Image 2',
      url: 'https://images.pexels.com/photos/9667784/pexels-photo-9667784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];

  doc = new jsPDF('p', 'px', 'a4');

  ngOnInit(): void {
    this.generateImages();
  }


  generateImages() {

    let count = 0;
    for (const img of this.images) {
      const newImage = new Image();
      newImage.src = img.url;
      newImage.crossOrigin = "anonymous"

      newImage.onload = () => {
        const imageData = this.getBase64Image(newImage)
        this.doc.addImage(
          imageData.img,
          'JPG',
          20,
          20,
          380,
          0
        );
        this.doc.addPage();
        count += 1;
        if (this.images.length === count) {
          console.log('Download');
        }
      }
      newImage.onerror = () => {
        count += 1;
        if (this.images.length === count) {
          console.log('Download');
        }
      }
    }
  }

  download() {
    this.doc.deletePage(this.images.length + 1);
    this.doc.save();
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement('canvas');
    canvas.classList.add('myStyle');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.imageSmoothingQuality = "high"
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL('image/png');
    return { img: dataURL, width: canvas.width, height: canvas.height };
  }
}
