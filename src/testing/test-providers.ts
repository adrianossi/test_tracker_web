// NG2
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Router, ActivatedRoute } from '@angular/router';

// App
import { StepService } from './../app/pages/step/services/step-service/step.service';

class MockActivatedRoute {
  snapshot:any;

  constructor() {
    this.snapshot = {
      params: {
        section: 'Test'
      },
      queryParams: {
        criteria: 'TEST'
      }
    };
  }
}

class MockRouter {
  parent:any;

  constructor() {
    this.parent = {};
  }

  navigate() {
  }
}

class MockViewContainerRef {
}

export const APP_TEST_HTTP_PROVIDERS = [
  BaseRequestOptions,
  MockBackend,
  {
    provide: Http,
    useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
    deps: [MockBackend, BaseRequestOptions]
  }
];

export const APP_TEST_SERVICE_PROVIDERS = [
  StepService,
  { provide: ActivatedRoute, useClass: MockActivatedRoute },
  { provide: Router, useClass: MockRouter },
];

export const APP_TEST_PROVIDERS = [
  ...APP_TEST_SERVICE_PROVIDERS,
  ...APP_TEST_HTTP_PROVIDERS
];
