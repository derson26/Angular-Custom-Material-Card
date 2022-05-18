
export interface IPlans {
    price?: number,
    type?: string,
    description?: string,
    properties?: Array<IProperties>
  }
  
  interface IProperties{
    property: string,
    allow:boolean
  }