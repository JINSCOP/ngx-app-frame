import { Injectable } from '@angular/core';
import { PinYin } from './code.pinYin';
@Injectable({
  providedIn: 'root'
})
export class AFPinYinService {

  // ---------- begin 汉字转换拼音 ----------
  convertPinYin(l1) {
    var l2 = l1.length;
    var I1 = "";
    var reg = new RegExp('[a-zA-Z0-9\- ]');
    for (var i = 0; i < l2; i++) {
      var val = l1.substr(i, 1);
      var name = this.arraySearch(val, PinYin);
      if (reg.test(val)) {
        I1 += val;
      } else if (name !== false) {
        I1 += name;
      }

    }
    I1 = I1.replace(/ /g, '-');
    while (I1.indexOf('--') > 0) {
      I1 = I1.replace('--', '-');
    }
    return I1;
  }

  // 在对象中搜索
  arraySearch(l1, l2) {
    for (var name in PinYin) {
      if (PinYin[name].indexOf(l1) != -1) {
        // return this.ucfirst(name);
        return name;
      }
    }
    return false;
  }

}
