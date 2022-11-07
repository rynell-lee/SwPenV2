const CameraApp = () => {
  //   const cameraPermission = await Camera.getCameraPermissionStatus();
  //   const microphonePermission = await Camera.getMicrophonePermissionStatus();

  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) return <LoadingView />;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default CameraApp;
