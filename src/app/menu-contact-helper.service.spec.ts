import { TestBed } from '@angular/core/testing';

import { MenuContactHelperService } from './menu-contact-helper.service';

describe('MenuContactHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuContactHelperService = TestBed.get(MenuContactHelperService);
    expect(service).toBeTruthy();
  });
});
