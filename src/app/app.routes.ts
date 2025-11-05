import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import path from 'path';
import { About } from './pages/about/about';
import { Productos } from './pages/products/products';
import { Component } from '@angular/core';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'nosotros', component:About},
    {path:'productos', component:Productos},
    {path:'contacto', component:Contact},
    {path:'**', redirectTo:''}
];
