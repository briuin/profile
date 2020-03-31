import { BehaviorSubject } from "rxjs";

class GlobalService {
  name = new BehaviorSubject("test");

  get name$() {
    return this.name.asObservable();
  }

  setName(name) {
    this.name.next(name);
  }
}

const service = new GlobalService();
export default service;
