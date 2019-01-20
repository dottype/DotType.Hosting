import { IHttpApplication } from "./IHttpApplication";

/** Represents a web server interface. */
export interface IServer
{
    /** Starts the server with an application. */
    StartAsync<TContext>(application: IHttpApplication<TContext>): Promise<void>;

    /** Stop processing requests and shut down the server. */
    StopAsync(): Promise<void>
}