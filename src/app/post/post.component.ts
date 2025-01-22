import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any[]=[];

  id!:number;
  title:string='';
  body:string='';
  isHiiden:boolean=true

  constructor(private service:HttpService) { }

  ngOnInit(): void {

    this.getRecordFromB();
  }
  getRecordFromB(){
    this.service.getRecord().subscribe((response:any)=>{
      // console.log(response)
      this.post=response;
    },(error)=>{
      alert("Error is occured..")
    })

  }
  onSend(iinputTitle:any,inputBody:any){
    let obj={
      title:iinputTitle,
      body:inputBody

    }
    this.service.postRecord(obj).subscribe((response:any)=>{

      console.log(response)

    })


  }
  onEdit(item:any){
    this.id=item.id,
    this.title=item.title,
    this.body=item.body
    this.isHiiden=false

    }
    onUpdate(){
      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }
      this.service.updateData(obj).subscribe((response)=>{
        console.log(response)
        this.isHiiden=true
      })
    }
    onDelete(id:any){

      this.service.deleteData(id).subscribe((response:any)=>{
        console.log(response)
      })

    }
    

  }


