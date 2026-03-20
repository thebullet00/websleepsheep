type DeviceVariant = "home" | "cycles" | "alarm";

type DeviceFrameProps = {
  variant: DeviceVariant;
  title: string;
};

function CyclesChart() {
  return (
    <svg viewBox="0 0 210 100" className="device-chart" aria-hidden="true">
      <path d="M6 80C28 72 36 52 52 50C67 48 72 74 90 72C108 70 112 39 132 36C152 33 157 57 180 59C190 60 198 54 204 50" />
      <path d="M6 92H204" className="axis" />
    </svg>
  );
}

function AlarmScreen() {
  return (
    <div className="alarm-screen">
      <p className="alarm-time">07:12</p>
      <p className="muted body-small">Light sleep detected</p>
      <button type="button" className="btn btn-primary">Wake now</button>
    </div>
  );
}

export default function DeviceFrame({ variant, title }: DeviceFrameProps) {
  return (
    <article className={`device-frame device-${variant}`}>
      <div className="device-notch" />
      <div className="device-screen">
        <p className="device-title body-small muted">{title}</p>
        {variant === "home" && (
          <div className="device-home">
            <div className="device-home-dot" aria-hidden="true" />
            <p className="body-small muted">Good night mode</p>
          </div>
        )}
        {variant === "cycles" && <CyclesChart />}
        {variant === "alarm" && <AlarmScreen />}
      </div>
    </article>
  );
}
