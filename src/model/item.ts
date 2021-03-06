export class Item {
  public itemid: number = 0
  public supid: number = 0
  public name: string = "default"
  public desc: string = "default"
  public qty: number = 0
  public url: string = "default"
  public price: number = 0
  public type: string = "default"

  public constructor(init?:Partial<Item>) {
    Object.assign(this, init);
  }

  public getUpdatedReview():void{}
  public orderFromSupply():void{}
  public notifiyEmpAboutSupply():void{}
}
