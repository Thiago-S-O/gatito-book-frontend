import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpCliente: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(usuario:string, senha:string):Observable<HttpResponse<any>> { // retorna body e header da requisição
    return this.httpCliente.post(`${API}/user/login`, {
      userName: usuario,
      password: senha
    },
    {
      observe: 'response'
    }
  ).pipe( // salva o token no serviço
    tap((res) => {
      const authToken = res.headers.get('x-access-token') ?? '';
      this.usuarioService.salvaToken(authToken);
    })
  )};
}
