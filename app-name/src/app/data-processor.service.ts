import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { ElectronCommunicatorService } from './electron-communicator.service';
import { ValidRequest } from './ValidRequest';

@Injectable({
  providedIn: 'root',
})
export class DataProcessorService {
  constructor(private communicator: ElectronCommunicatorService) {}

  setUnsubscribeTidyWithElectron(subscriptions: Subscription[]): void {
    if (subscriptions) {
      for (const subscription of subscriptions) {
        if (subscription) {
          try {
            subscription.unsubscribe();
          } catch (error) {
            console.log('Failed to unsubscribe electron.');
            console.log(error);
          }
        }
      }
    }
    this.communicator.unsubscribeElectron();
  }

  loadSettings(feedback?: (s: string) => void): void {
    this.sendElectron(ValidRequest.getSettings, {});
    const msg = 'Getting Settings...';
    if (feedback) {
      feedback(msg);
    }
  }

  saveSettings(settingsObject, tagsJson, feedback?: (s: string) => void): void {
    settingsObject.tags = tagsJson;
    this.sendElectron(ValidRequest.saveSettings, {
      data: settingsObject,
    });
    const msg = 'Saving Settings...';
    if (feedback) {
      feedback(msg);
    }
  }

  sendElectron(keyIn: string, options: any): void {
    options.key = keyIn;
    this.communicator.sendToElectron(options);
  }
}
