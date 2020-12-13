import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ValidRequest } from '../ValidRequest';
import { ElectronCommunicatorService } from '../electron-communicator.service';
import { DataProcessorService } from './../data-processor.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit, OnDestroy {
  electronSubscriptions = [];
  feedbackMessage;
  suggestionsJson;
  settingsJson;
  maxProgress = 0;

  result;

  constructor(
    private assistant: DataProcessorService,
    private electronCommunicator: ElectronCommunicatorService
  ) {}

  ngOnInit(): void {
    this.electronSubscriptions = [];
    this.electronSubscriptions.push(this.setElectronListener());
    this.assistant.loadSettings(this.getFeedback());
  }

  ngOnDestroy(): void {
    this.assistant.setUnsubscribeTidyWithElectron(this.electronSubscriptions);
  }

  save(): void {
    this.assistant.saveSettings(this.settingsJson, this.suggestionsJson);
  }

  onUpdatedJson(json): void {
    this.suggestionsJson = json;
  }

  getFeedback(): (s: string) => void {
    return (msg) => {
      this.feedback(msg);
    };
  }

  feedback(msg: any): void {
    this.feedbackMessage = JSON.stringify(msg);
    console.log(msg);
  }

  /**
   * responseFromMain
   * {key: string, response: any}
   */
  setElectronListener(): Subscription {
    return this.electronCommunicator
      .listenToElectronResponsibly('responseFromMain')
      .subscribe((result) => {
        if (result) {
          this.handleResponse(result);
          this.feedback('Got Response From Electron.');
        } else {
          this.feedback('Get Data From Electron Empty.');
        }
      });
  }

  handleResponse(result): void {
    // TODO: handle each response
    console.log(result);
    this.result = result;

    const key = result.key;
    const response = result.response;

    if (key) {
      switch (key) {
        case ValidRequest.getSettings:
          this.handleSettingsResponse(response);
          break;
        case ValidRequest.getFeedback:
          this.feedback(response);
          break;
        default:
          break;
      }
    }
  }

  handleSettingsResponse(response: any): void {
    if (response) {
      if (response.tags) {
        this.feedback('Got Settings.');
        this.suggestionsJson = response.tags;
        this.settingsJson = response;
      }
    }
  }
}
