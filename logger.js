const logger = {
  logAccess: (req) => {
    const ip = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];
    
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      ip,
      device: userAgent,
      path: req.path,
      method: req.method
    };

    console.log('Access Log:', logEntry);
    
    

    
    return logEntry;
  }
};

module.exports = logger;
