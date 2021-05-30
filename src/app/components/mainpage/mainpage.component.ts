import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { ListResult } from '@angular/fire/storage/interfaces';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  public productosList : Producto[] = []
  produtosUrl: Observable<string | null>[] = []

  bannerUrl: Observable<String | null> | undefined 

  public urls: string[] = [] 
  constructor(
    private productoService: ProductoService,
    private storageService: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    //var name = this.getUrlBanner("banner")
    console.log("banners/"+this.getUrlBanner("banner"))
    const ref = this.storageService.ref("banners/"+this.getUrlBanner("banner"))
    this.bannerUrl = ref.getDownloadURL()

     /*
      this.productoService.getProductos()
      .snapshotChanges().
      subscribe( item => {
        this.productosList = [];
        item.forEach(elemento => {  
          let x = JSON.parse(JSON.stringify(elemento.payload))   //elemento.payload.toJSON();
          x["$key"] = elemento.key;         
          this.productosList.push(x as Producto)
          const ref = this.storageService.ref('fotosProductos/'+ x["nombre"]+'.jpeg'); 
          this.profilesUrl.push(ref.getDownloadURL()) 
        })
        
      },error =>{
        console.error(error)
      })
      */
     
  }

  getUrlBanner(nameFile: string): string  {
    var refNameJpg = nameFile+".jpg"
    var refNamePng = nameFile+".png"
    var refNameJpeg = nameFile+".jpeg"
    
    this.storageService.ref("banners").listAll().subscribe( items => {

      items.items.forEach((element => {
        if (element.name == refNameJpeg || element.name == refNamePng || element.name == refNameJpg){
          console.log(element.name)
          return element.name
        }else {
          return ""
        }
      }))
    })
      return ""
  }

}
