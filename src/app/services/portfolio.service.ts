import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Education } from '../interfaces/education';
import { Training } from '../interfaces/training';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private educationCollection: AngularFirestoreCollection<Education>;
  private trainingCollection: AngularFirestoreCollection<Training>;
  private projectCollection: AngularFirestoreCollection<Project>;

  constructor( private afs: AngularFirestore ) {
    this.educationCollection = this.afs.collection('educations');
    this.trainingCollection = this.afs.collection('trainings');
    this.projectCollection = this.afs.collection('projects');
  }

  getEducations() {
    return this.educationCollection.valueChanges().pipe(
      map(
        res => res.reverse()
      )
    );
  }

  getTrainings() {
    return this.trainingCollection.valueChanges();
  }

  getProjects() {
    return this.projectCollection.valueChanges().pipe(
      map(
        res => res.reverse()
      )
    );
  }
}
