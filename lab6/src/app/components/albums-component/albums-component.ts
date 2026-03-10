import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-albums-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  errorMessage = '';
  deletedAlbums: number[] = [];
  constructor(private albumService: AlbumService, private cdr : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAlbums();
    this.cdr.detectChanges();
  }

  loadAlbums(): void {
    this.loading = true;
    this.errorMessage = '';
    this.cdr.detectChanges();

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data.filter(album => !this.deletedAlbums.includes(album.id));
        this.loading = false;
        this.cdr.detectChanges();
      },    
      error: () => {
        this.errorMessage = 'Failed to load albums.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  deleteAlbum(id: number): void {
    this.errorMessage = '';
    this.cdr.detectChanges();
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.deletedAlbums.push(id);
        this.albums = this.albums.filter((album) => album.id !== id);
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to delete album.';
        this.cdr.detectChanges();
      }
    });
  }
}