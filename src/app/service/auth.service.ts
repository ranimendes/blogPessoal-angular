import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  entrar(userLogin: UsuarioLogin): Observable <UsuarioLogin> {
return this.http.post<UsuarioLogin>('https://blogpessoalrani.herokuapp.com/usuarios/logar', userLogin , this.token)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoalrani.herokuapp.com/usuarios/cadastrar', user)
  }

  atualizar(user: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('https://blogpessoalrani.herokuapp.com/usuarios/atualizar', user, this.token)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogpessoalrani.herokuapp.com/usuarios/${id}`, this.token)
  }

   token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization' , environment.token)
    }
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }
}
