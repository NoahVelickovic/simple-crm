import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD1vEJB2q--CPAS1QmcfJNDQ4KEdoQKj4U',
  authDomain: 'simplecrm-f83b9.firebaseapp.com',
  projectId: 'simplecrm-f83b9',
  storageBucket: 'simplecrm-f83b9.firebasestorage.app',
  messagingSenderId: '869237601359',
  appId: '1:869237601359:web:54c0c9bb44cd6481cf663a',
  measurementId: 'G-YTQ57NKPWH',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(MatNativeDateModule),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),

    provideAnalytics(() => {
      if (typeof window !== 'undefined') return getAnalytics();
      return null as any;
    }),
    provideFirestore(() => getFirestore()),
  ],
};
