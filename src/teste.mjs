const checkForVideoAudioAccess = async () => {
    try {
      const cameraResult = await navigator.permissions.query({ name: 'camera' });
      // The state property may be 'denied', 'prompt' and 'granted'
      this.isCameraAccessGranted = cameraResult.state !== 'denied';

      const microphoneResult = await navigator.permissions.query({ name: 'microphone' });
      this.isMicrophoneAccessGranted = microphoneResult.state !== 'denied';
    } catch(e) {
      console.error('An error occurred while checking the site permissions', e);
    }

    return true;
  }