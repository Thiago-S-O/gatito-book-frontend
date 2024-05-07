import { ActivatedRoute } from '@angular/router';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  // animais$ !: Observable<Animais>;
  animais!: Animais;

  constructor(
    // private usuarioService: UsuarioService,
    // private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*
     this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
        this.animais = animais;
      })
    })
    _________________________________________________
    // neste caso o resouver toma conta disso - pesquisar mais sobre
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    );
    */
    this.activatedRoute.params.subscribe((parans) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    })
  }

}
