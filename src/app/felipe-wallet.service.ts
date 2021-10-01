import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface BitCoinRate{
  bpi:{
    USD: {
      symbol: string;
      rate_float: number;
    };
    EUR: {
      symbol: string;
      rate_float: number;
    };
  } 
}

interface BrlRate{   
  bpi:{
    BRL: {
      code: string;
      rate_float: number;
    }
  }
}

@Injectable()
export class FelipeWalletService {
  bitCoinRates: Array<BitCoinRate> = [];
  brlRates: Array<BrlRate> = [];

  private balance = 0;


  constructor( private http: HttpClient) { 
    this.updateRates();
  }


  //currency

  updateBitCoinRates(){
    this.http.get<BitCoinRate>('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe(data=>{
      this.bitCoinRates.push(data);
    }
    )
  }

  updateBRLRates(){
    this.http.get<BrlRate>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json').subscribe(data=>{
      this.brlRates.push(data);
    }
    )
  }

  updateRates() {
    setInterval(() => {
      this.updateBitCoinRates();
      this.updateBRLRates();
    }, 60000
    )
  }


  //wallet


}