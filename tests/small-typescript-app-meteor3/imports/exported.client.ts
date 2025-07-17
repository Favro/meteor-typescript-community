export const sharedString = "This is the client";

interface SharedExportTest {
    shared: string;
    client: string;
};

export const sharedObject: SharedExportTest = {
    shared: "Client Shared",
    client: "Client Member"
};