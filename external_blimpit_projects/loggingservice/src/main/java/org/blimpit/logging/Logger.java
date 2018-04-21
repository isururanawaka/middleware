package org.blimpit.logging;

/**
 * An interface which describes the logging APIs
 */
public interface Logger {

    /**
     * @param message messageTobePrint
     * @param filePath Destination File
     */
    void logToFile(String message, String filePath);

}
