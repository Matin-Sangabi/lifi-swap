import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function WalletHeader() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors, connectAsync } = useConnect();

  return (
    <div className="w-full max-w-screen-2xl mx-auto mt-4 ">
      <div className="w-full flex items-center justify-between p-4 rounded-xl bg-white shadow border border-gray-100">
        <span className="text-black">Lifi-Widget</span>
        <div className="flex items-center gap-x-2">
          <span className="text-black">
            {address
              ? `${address?.slice(0, 10)} ... ${address?.slice(-10)}`
              : ""}
          </span>
          {!isConnected ? (
            <button
              className="p-2 min-w-[120px] rounded-lg bg-violet-800 text-white"
              onClick={() => {
                connectAsync({ connector: connectors[0] });
              }}
            >
              Connect
            </button>
          ) : (
            <>
              <button
                className="p-2 min-w-[120px] cursor-pointer rounded-lg bg-violet-800 text-white"
                onClick={() => {
                  disconnect();
                }}
              >
                Disconnect
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
