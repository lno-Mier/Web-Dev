import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Photo } from '../../models/photo';
import { AlbumService } from '../../services/album.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-photos-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos();
    this.cdr.detectChanges();
  }

  loadPhotos(): void {
    this.loading = true;
    this.errorMessage = '';
    this.cdr.detectChanges();

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges()
      },
      error: () => {
        this.errorMessage = 'Failed to load photos.';
        this.loading = false;
        this.cdr.detectChanges()
      }
    });
  }
}
