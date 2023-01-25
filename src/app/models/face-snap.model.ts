export class FaceSnap {
    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    location?: string;

    // trop lourd, on se contente de la déclaration des propriétés
    // constructor (public title: string, public description: string, public createdDate: Date, public snaps: number, public imageUrl: string){
    //     this.title = title;
    //     this.description = description;
    //     this.createdDate = createdDate;
    //     this.snaps = snaps;
    //     this.imageUrl = imageUrl;
    // }
}