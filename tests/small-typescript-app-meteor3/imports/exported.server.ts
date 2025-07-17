export const sharedString = "This is the server";

interface SharedExportTest {
    shared: string;
    server: string;
};

export const sharedObject: SharedExportTest = {
    shared: "Server Shared",
    server: "Server Member"
};
