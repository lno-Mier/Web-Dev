import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-detail-component',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail-component.html',
  styleUrl: './album-detail-component.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  errorMessage = '';
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum(): void {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (fg) => {
        this.album = fg;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to load album.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  saveAlbum(): void {
    if (!this.album) return;

    this.errorMessage = '';
    this.successMessage = '';

    this.albumService.updateAlbum(this.album).subscribe({
      next: (updatedAlbum) => {
        this.album = updatedAlbum;
        this.successMessage = 'Album updated';
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed';
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
    this.location.back();
    this.cdr.detectChanges();
  }
}
